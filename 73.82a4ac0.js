webpackJsonp([73],{131:function(s,a,n){s.exports=n(335)},208:function(s,a){s.exports='<section><h1>Lazy load</h1> <blockquote> <p>图片懒加载指令。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Lazyload } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.use(Lazyload);\n</code></pre> <h2>例子</h2> <p>为 <code>img</code> 元素添加 <code>v-lazy</code> 指令，指令的值为图片的地址。同时需要设置图片在加载时的样式。</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>ul</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>li</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"item in list"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>v-lazy</span>=<span class=hljs-string>"item"</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>li</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>ul</span>&gt;</span>\n</code></pre> <pre><code class=language-css><span class=hljs-selector-tag>image</span><span class=hljs-selector-attr>[lazy=loading]</span> {\n  <span class=hljs-attribute>width</span>: <span class=hljs-number>40px</span>;\n  <span class=hljs-attribute>height</span>: <span class=hljs-number>300px</span>;\n  <span class=hljs-attribute>margin</span>: auto;\n}\n</code></pre> <p>若列表不在 window 上滚动，则需要将被滚动元素的 id 属性以修饰符的形式传递给 <code>v-lazy</code> 指令</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"container"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>ul</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>li</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"item in list"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>v-lazy.container</span>=<span class=hljs-string>"item"</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>li</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>ul</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n</code></pre> </section>'},335:function(s,a,n){var l,p,t={};p=n(208),s.exports=l||{},s.exports.__esModule&&(s.exports=s.exports.default);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;p&&(e.template=p),e.computed||(e.computed={}),Object.keys(t).forEach(function(s){var a=t[s];e.computed[s]=function(){return a}})}});