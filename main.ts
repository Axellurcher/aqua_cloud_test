import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AzurermProvider, VirtualNetwork, ResourceGroup, WindowsVirtualMachine, Subnet, NetworkInterface } from "./.gen/providers/azurerm"

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new AzurermProvider(this, "AzureRm", {
      features: {}
    })
    let rg = new ResourceGroup(this, "rg1", {
      name: "resgroup",
      location: "eastus"
    })
    let vnet = new VirtualNetwork(this, "vnet1", {
      name: "network1",
      location: rg.location,
      addressSpace: ["10.0.0.0/16"],
      resourceGroupName: rg.name
    })
    let subnet = new Subnet(this, "subnet1", {
      name: "subnet1",
      resourceGroupName: rg.name,
      virtualNetworkName: vnet.name,
      addressPrefixes: ["10.0.2.0/24"]
    })
    let network_interface = new NetworkInterface(this, "nic", {
      name: "nic1",
      resourceGroupName: rg.name,
      location: rg.location,
      ipConfiguration: [{
        name: "internal",
        subnetId: subnet.id,
        privateIpAddressAllocation: "Dynamic"
      }]
    })

    new WindowsVirtualMachine(this, 'vm1', {
      name : "vm1",
      resourceGroupName : rg.name,
      location : rg.location,
      size : "Standard_F2",
      adminUsername : "adminuser",
      adminPassword : "P@$$w0rd1234!",
      networkInterfaceIds : [
        network_interface.id,
      ],
      osDisk: {
        caching: "ReadWrite",
        storageAccountType: "Standard_LRS",
      },
      sourceImageReference: {
        publisher: "MicrosoftWindowsServer",
        offer: "WindowsServer",
        sku: "2016-Datacenter",
        version: "latest",
    },
  });
  
  }
}

const app = new App();
new MyStack(app, "vm");
app.synth();