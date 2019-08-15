(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"3jQn":function(e,t,n){"use strict";n.r(t);var a=n("+Ls6"),r=n("ERkP"),l=n.n(r),o=n("GsAr"),i=n("lIm4"),s=n("nFRM"),c=n("R5dR"),u=function(){return l.a.createElement(s.a,null,l.a.createElement(s.a.Prop,{name:"description",types:"ReactChild"},"Append a description to the textarea field."),l.a.createElement(s.a.Prop,{name:"error",types:"ReactChild"},"Displays an error message for the field."),l.a.createElement(s.a.Prop,{name:"label",types:"ReactChild"},"Label element for textareas. Component with auto generate ",l.a.createElement(i.a,null,"id"),"'s for the accessibility API."),l.a.createElement(s.a.Prop,{name:"rows",types:["1","2","3","4","5","6","7"],defaults:"3"},"Determines the intial height via HTML's ",l.a.createElement(i.a,null,"row")," property."),l.a.createElement(s.a.Prop,{name:"resize",types:"boolean",defaults:"true"},"Determines if the textarea is resizable vertically."))},p=function(){return l.a.createElement(a.Text,null,"Supports all native ",l.a.createElement(i.a,null,"<p />")," element attributes.")},f=function(){return l.a.createElement(a.Text,null,"See"," ",l.a.createElement(c.a,{href:"/Form/FormPage",as:"/form#error"},"Forms.Error"),".")},m=function(){return l.a.createElement(a.Text,null,"See"," ",l.a.createElement(c.a,{href:"/Form/FormPage",as:"/form#label"},"Forms.Label"),".")};t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.H0,null,"Textarea"),l.a.createElement(a.Text,null,"Textareas are stylized form controls with the ability of controling validation."," ",l.a.createElement(a.Link,{href:"https://design.bigcommerce.com/components/text-field",target:"_blank"},"Text Field Design Guidelines"),"."),l.a.createElement(o.a,null,'function Example() {\n  const [value, setValue] = React.useState(\'\');\n\n  const handleChange = event => setValue(event.target.value);\n\n  return (\n    <Form.Group>\n      <Textarea\n        label="Label"\n        description="Description for the textarea."\n        placeholder="Placeholder"\n        rows={3}\n        resize={true}\n        value={value}\n        onChange={handleChange}\n      />\n    </Form.Group>\n  );\n}'),l.a.createElement(a.H1,null,"API"),l.a.createElement(a.H2,null,"Textarea"),l.a.createElement(a.Text,null,"Supports all native ",l.a.createElement(i.a,null,"<textarea />")," element attributes."),l.a.createElement(u,null),l.a.createElement(a.H2,null,"Textarea.Description"),l.a.createElement(p,null),l.a.createElement(a.H2,null,"Textarea.Error"),l.a.createElement(f,null),l.a.createElement(a.H2,null,"Textarea.Label"),l.a.createElement(m,null),l.a.createElement(a.H1,null,"Error State"),l.a.createElement(a.Text,null,"Textareas allow you to pass in an ",l.a.createElement(i.a,{primary:!0},"error")," message that will control the styles of an input. The logic on the input can be controlled with the ",l.a.createElement(i.a,{primary:!0},"onChange")," prop."),l.a.createElement(o.a,null,'<Form>\n  <Form.Group>\n    <Textarea\n      label="Description"\n      description="Description needs to be at least 64 characters long."\n      value="Start of some text..."\n      minLength={64}\n      error="Field needs to contain at least 64 characters."\n      onChange={() => null}\n    />\n  </Form.Group>\n</Form>'),l.a.createElement(a.H1,null,"Controlling Rows"),l.a.createElement(a.Text,null,"By default, a ",l.a.createElement(i.a,null,"Textarea")," displays with ",l.a.createElement(i.a,null,"3")," rows. In order to set the intial amount of rows, pass in the ",l.a.createElement(i.a,null,"rows")," prop. There can only be a maximum of ",l.a.createElement(i.a,null,"7")," rows."),l.a.createElement(o.a,null,'<Form.Group>\n  <Textarea label="Label" description="Textarea with 5 rows." placeholder="Placeholder" rows={5} />\n</Form.Group>'),l.a.createElement(a.H1,null,"Resizable"),l.a.createElement(a.Text,null,"You can also control whether ",l.a.createElement(i.a,null,"Textarea")," components are resizeable. Resizing is only available on the vertical axis."),l.a.createElement(o.a,null,'<Form.Group>\n  <Textarea label="Label" placeholder="Textarea cannot be resized." resize={false} />\n</Form.Group>'))}},KeDb:function(e,t,n){"use strict";var a=n("lpv4"),r=a(n("h7sq")),l=a(n("tS02")),o=a(n("/XES")),i=a(n("ztBH")),s=a(n("Fayl")),c=n("5Tpg"),u=n("lpv4");t.__esModule=!0,t.default=void 0;var p,f=u(n("JeHL")),m=n("EfWO"),h=c(n("ERkP")),d=(u(n("aWzz")),u(n("7xIC"))),E=(n("IBMh"),n("kMDi"));function v(e){return e&&"object"===typeof e?(0,E.formatWithValidation)(e):e}var g=new f.default,w=window.IntersectionObserver;function x(){return p||(w?p=new w(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var b=function(e){function t(){var e;return(0,r.default)(this,t),(e=(0,o.default)(this,(0,i.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,a=null;return function(r,l){if(a&&r===t&&l===n)return a;var o=e(r,l);return t=r,n=l,a=o,o}}(function(e,t){return{href:v(e),as:t?v(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var l=e.formatUrls(e.props.href,e.props.as),o=l.href,i=l.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,E.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var s=window.location.pathname;o=(0,m.resolve)(s,o),i=i?(0,m.resolve)(s,i):o,t.preventDefault();var c=e.props.scroll;null==c&&(c=i.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](o,i,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&w&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),g.set(e,t),function(){n.unobserve(e),g.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,m.resolve)(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var l=h.Children.only(t),o={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){l.props&&"function"===typeof l.props.onMouseEnter&&l.props.onMouseEnter(t),e.prefetch()},onClick:function(t){l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==l.type||"href"in l.props)||(o.href=r||a),h.default.cloneElement(l,o)}}]),t}(h.Component);b.propTypes=void 0,b.defaultProps={prefetch:!0};var y=b;t.default=y},R5dR:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("+Ls6"),r=n("jvFD"),l=n.n(r),o=n("ERkP"),i=n.n(o);function s(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var t=e.as,n=e.children,r=e.href;return i.a.createElement(l.a,{href:r,as:s(t)},"string"===typeof n?i.a.createElement(a.Link,null,n):n)}},jvFD:function(e,t,n){e.exports=n("KeDb")},tYVf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Textarea/TextareaPage",function(){var e=n("3jQn");return{page:e.default||e}}])}},[["tYVf",1,0]]]);