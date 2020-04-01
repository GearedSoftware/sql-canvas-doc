---
id: customization
title: Customization
sidebar_label: Customization
---

## Change Object Appearance

An Object's appearances can be changed to fit your need, from the color and shape of the object to the display text using the object's data.

Right-click on an object to open the Context Menu and click on **Customization** then **Appearance**

![Demo Customize Appearance](/img/docs/demo_ctm_appearance.gif)

- Color: The color and text color of the object to display

- Shape: The Shape of the object to display

- Text: The Text display with the object, can be customized using free-text and actual object data.

The Customization can be applied to:

1. To Schema Style (all future objects of the same type from this schema will use this customization)

2. To Selected Object(s)

3. To Similar Object(s) in File

## Collapse Associative Object 

An associative (or junction) object type which connect 2 Parent objects can be collapsed and displayed as Connector between these objects.

Right-click on an object to open the Context Menu and click on **Customization** then **Collapse**

![Demo Customize Collapse](/img/docs/demo_ctm_collapse.gif)

- From Parent: The Parent to start the connector from

- To Parent: The Parent ot end the connector at

> Note: Associate table must have at least 2 foreign keys and cannot be reference by another table

> Note: Schema Editor must be saved to keep the change on next start

## Reset

To reset an object, right-click on an object to open the Context Menu and click on **Customization** then **Reset**.

It's appearance will be reseted to the schema style and uncollaped if it is.