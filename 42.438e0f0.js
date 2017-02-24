webpackJsonp([42],{241:function(s,a){s.exports="<section><h1>Radio</h1> <blockquote> <p>Radio list, depends on <a v-link=\"{path:'/' + $route.language + '/cell'}\">cell</a>.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Radio } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(Radio.name, Radio);\n</code></pre> <h2>Usage</h2> <p>Basic usage</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-radio</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>\"radio list\"</span>\n  <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"['optionA', 'optionB', 'optionC']\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-radio</span>&gt;</span>\n</code></pre> <p>Can be disabled</p> <pre><code class=language-javascript><span class=hljs-keyword>this</span>.options = [\n  {\n    <span class=hljs-attr>label</span>: <span class=hljs-string>'disabled option'</span>,\n    <span class=hljs-attr>value</span>: <span class=hljs-string>'valueF'</span>,\n    <span class=hljs-attr>disabled</span>: <span class=hljs-literal>true</span>\n  },\n  {\n    <span class=hljs-attr>label</span>: <span class=hljs-string>'optionA'</span>,\n    <span class=hljs-attr>value</span>: <span class=hljs-string>'valueA'</span>\n  },\n  {\n    <span class=hljs-attr>label</span>: <span class=hljs-string>'optionB'</span>,\n    <span class=hljs-attr>value</span>: <span class=hljs-string>'valueB'</span>\n  }\n];\n</code></pre> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-radio</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>\"radio list\"</span>\n  <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"options\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-radio</span>&gt;</span>\n</code></pre> <p>Alignment of the radio</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-radio</span>\n  <span class=hljs-attr>align</span>=<span class=hljs-string>\"right\"</span>\n  <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"options\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-radio</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>options</td> <td>array of options(string or object)</td> <td>Array</td> <td></td> <td></td> </tr> <tr> <td>value</td> <td>array of the selected option</td> <td>Array</td> <td></td> <td></td> </tr> <tr> <td>title</td> <td>title of the list</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>align</td> <td>alignment of the radio</td> <td>String</td> <td>left, right</td> <td>left</td> </tr> </tbody> </table></div></section>"},368:function(s,a,t){var n,l,p={};l=t(241),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports.default);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(e.template=l),e.computed||(e.computed={}),Object.keys(p).forEach(function(s){var a=p[s];e.computed[s]=function(){return a}})},45:function(s,a,t){s.exports=t(368)}});