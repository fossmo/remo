# REMO - a modal dialog for ReactJS

[![Circle CI](https://circleci.com/gh/fossmo/remo/tree/master.svg?style=svg)](https://circleci.com/gh/fossmo/remo/tree/master)

![](https://raw.githubusercontent.com/fossmo/remo/master/remojs.gif)

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

## License

The MIT License (MIT)

Copyright (c) 2015 Pål Fossmo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
