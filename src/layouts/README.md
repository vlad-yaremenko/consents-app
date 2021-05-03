# layouts/

Here we keep our layouts here.

The purpose of it is to be able to change the layout depends on the view. 

> For example Auth flow should get layout without Navigation
> but all other views will get Default layout with Navigation

Each layout should get `Switch` component as children and render it.

## Alias

For this folder, we have an alias setup. So you can access this folder using. 

`import Default from '@layouts/Default';`
