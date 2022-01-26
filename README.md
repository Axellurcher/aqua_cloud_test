# This repository

Is a test case

## Prerequisites

Download and Install [Node.js](https://nodejs.org/en/download/)

Install TypeScript using [npm](https://www.npmjs.com/package/typescript)

Terraform open source [CLI](https://www.terraform.io/downloads.html)

## To change deployment to desired account follow these [steps](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/service_principal_client_secret) and update/create secret for your repository

# Manual usage

```shell
# git clone git@github.com:Axellurcher/aqua_cloud_test.git
# cd to aqua_cloud_test/cdk
# npm run get
# cdktf synth
Generated Terraform code for the stacks: vm
```

## To deploy

```shell
# cdktf deploy
```

### output of deploy

```shell
Deploying Stack: vm
Resources
 ✔ AZURERM_NETWORK_INTE nic                 azurerm_network_interface.nic
   RFACE
 ✔ AZURERM_RESOURCE_GRO rg1                 azurerm_resource_group.rg1
   UP
 ✔ AZURERM_SUBNET       subnet1             azurerm_subnet.subnet1
 ✔ AZURERM_VIRTUAL_NETW vnet1               azurerm_virtual_network.vnet1
   ORK
 ✔ AZURERM_WINDOWS_VIRT                     azurerm_windows_virtual_machine.vm1
   UAL_MACHINE

Summary: 5 created, 0 updated, 0 destroyed.
```

## To destroy

```shell
# cdktf destroy
```

### output of destroy

```shell

Destroying Stack: vm
Resources
 ✔ AZURERM_NETWORK_INTE nic                 azurerm_network_interface.nic
   RFACE
 ✔ AZURERM_RESOURCE_GRO rg1                 azurerm_resource_group.rg1
   UP
 ✔ AZURERM_SUBNET       subnet1             azurerm_subnet.subnet1
 ✔ AZURERM_VIRTUAL_NETW vnet1               azurerm_virtual_network.vnet1
   ORK
 ✔ AZURERM_WINDOWS_VIRT                     azurerm_windows_virtual_machine.vm1
   UAL_MACHINE

Summary: 5 destroyed.
```

## License

[MIT](https://choosealicense.com/licenses/mit/)