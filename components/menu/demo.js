webpackJsonp([37,155],{567:function(n,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u83dc\u5355","en-US":"Menu"},filename:"components/menu/demo/basic.md",id:"components-menu-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint global-require:0, no-nested-ternary:0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> ActivityIndicator<span class="token punctuation">,</span> NavBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Food\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'All Foods\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n        disabled<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Chinese Food\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Hot Pot\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Buffet\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'4\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Fast Food\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'5\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Snack\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'6\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Bread\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'7\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Fruit\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'8\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Noodle\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'9\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Leisure Food\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'10\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Supermarket\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'All Supermarkets\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Supermarket\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'C-Store\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Personal Care\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'4\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Extra\'</span><span class="token punctuation">,</span>\n    isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'you can not see\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MenuExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      initData<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      show<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> label <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n    data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>dataItem<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>dataItem<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        label <span class="token operator">=</span> dataItem<span class="token punctuation">.</span>label<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>dataItem<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          dataItem<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cItem<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cItem<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              label <span class="token operator">+</span><span class="token operator">=</span> <span class="token template-string"><span class="token string">` </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cItem<span class="token punctuation">.</span>label<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  handleClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Fix event propagation on Android</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      show<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// mock for async data loading</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>initData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          initData<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> initData<span class="token punctuation">,</span> show <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> menuEl <span class="token operator">=</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo-menu<span class="token punctuation">"</span></span>\n        <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>initData<span class="token punctuation">}</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token string">\'3\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">*</span> <span class="token number">0.6</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> loadingEl <span class="token operator">=</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">*</span> <span class="token number">0.6</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span> justifyContent<span class="token punctuation">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>show <span class="token operator">?</span> <span class="token string">\'menu-active\'</span> <span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span>\n            <span class="token attr-name">leftContent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Menu<span class="token punctuation">"</span></span>\n            <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n            <span class="token attr-name">iconName</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./menu.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onLeftClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top-nav-bar<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            Here is title\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>show <span class="token operator">?</span> initData <span class="token operator">?</span> menuEl <span class="token punctuation">:</span> loadingEl <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:".foo-menu {\n  position: relative;\n  z-index: 1000 !important;\n}\n.top-nav-bar {\n  position: relative;\n  z-index: 1000 !important;\n  background-color: #008AE6;\n  color: #FFF;\n}\n.am-navbar-title {\n  color: #FFF!important;\n}\n.menu-active:after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.4;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.foo-menu</span> </span><span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.top-nav-bar</span> </span><span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token important">!important</span><span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#008AE6</span><span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#FFF</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.am-navbar-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#FFF</span>!important<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.menu-active</span><span class="token pseudo-element">:after</span> </span><span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">\' \'</span><span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#000</span><span class="token punctuation">;</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token number">0.4</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},697:function(n,s,a){n.exports={basic:a(567)}}});