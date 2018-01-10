
          window.__NEXT_REGISTER_PAGE('/components/chips', function() {
            var comp = module.exports=webpackJsonp([36],{1612:function(e,t,o){e.exports=o(1613)},1613:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(l),i=o(5),r=o(10),s=n(r),c=o(18),p=n(c),u=o(17),h=n(u),f=[{name:"color",description:"What color of chip would you like? It can be a hex value or a named theme color.",defaultValue:"The `primary` color of your theme.",type:"string",optional:!0},{name:"symbol",description:"The symbol that is shown on mouse over of a clickable chip.",defaultValue:"",type:"string",optional:!0},{name:"onClick",description:"Is this interactive? If yes, what happens when the chip is clicked? This is commonly used to delete a filter in a list of filters.",defaultValue:"",type:"func",optional:!0}];t.default=function(e){return a.createElement(s.default,{pathname:e.url.pathname},a.createElement(i.Card,null,a.createElement("p",null,"Most commonly used for filters, these elements represent small bits of information that give a sense of context to the user. Chips can be interactive, or simply informative. They can take on any color passed through `props`, along with a symbol for the button that will be displayed if click behavior is detected."),a.createElement(i.Heading2Type,null,"Usage"),a.createElement(p.default,{snippet:'\n<div style={{ display: "flex" }}>\n  {/* These work well in a flex-ed parent */}\n  <Chip color="#006847">Hola</Chip>\n  <Chip color="#fff">Compadre</Chip>\n\n  <Chip color="#CE1126" symbol="!" onClick={() => window.alert("Muy bien!")}>\n    Como estas?\n  </Chip>\n  {/* onClick can do literally anything you want it to */}\n</div>\n',components:{Chip:i.Chip}}),a.createElement(i.Heading2Type,null,"Props"),a.createElement(h.default,{props:f})))}}},[1612]);
            return { page: comp.default }
          })
        