# REMO - a modal dialog for ReactJS

## Usage

```xml
<Remo isOpen={bool} >
  Modal dialog content.
</Remo>
```

## Styles
You can style REMO with CSS.
```css
.RemoOverlay{
  position: absolute;
  opacity: 0.3;
  top: 0px;
  border-top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 10;
}

.RemoModal{
  height:400px;
  width:500px;
  border-radius: 3px;
  background-color:white;
  position:absolute;
  margin:auto;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index: 99;
  padding: 10px;
}
```

## Example

To view a example of how to use the dialog, check out the example folder.
