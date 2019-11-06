(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{295:function(t,e,s){"use strict";s.r(e);var a=s(38),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("div",{staticClass:"alert alert--info"},[t._v("\nFollowing configuration items will be done by the superv:install command if possible.\n")]),t._v(" "),s("h3",{attrs:{id:"configure-composer-json-for-the-merge-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-composer-json-for-the-merge-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure composer.json for the Merge Plugin")]),t._v(" "),s("p",[t._v("superV uses Wikimedi Composer Plugin to merge addon composer settings into the main composer.json file automatically.")]),t._v(" "),s("p",[t._v("Add the following to "),s("code",[t._v("extra")]),t._v(" section in your project's "),s("code",[t._v("composer.json")]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extra"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"merge-plugin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"addons/*/*/*/composer.json"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recurse"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"replace"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"create-a-full-privileged-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-full-privileged-user","aria-hidden":"true"}},[t._v("#")]),t._v(" Create a full privileged User")]),t._v(" "),s("p",[t._v("superV uses the main "),s("code",[t._v("users")]),t._v(" table for authentication. But for authorization it has its own roles and actions. You can still use the existing users by granting them the "),s("code",[t._v("user")]),t._v(" role which is needed to use the default Port that is connected to main Admin Panel.")]),t._v(" "),s("p",[t._v("You can use this command to create a new user")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan superv:user "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Root User"')]),t._v(" root@superv.io --password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("secret\n")])])]),s("h3",{attrs:{id:"create-the-addons-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-addons-directory","aria-hidden":"true"}},[t._v("#")]),t._v(" Create the Addons directory")]),t._v(" "),s("p",[t._v("Composer packages for the superV addons are located in a special folder called "),s("code",[t._v("addons")]),t._v(" instead of the default vendor directory. "),s("router-link",{attrs:{to:"/concepts/Addons.html"}},[t._v("Learn more about addons")])],1),t._v(" "),s("p",[t._v("Create the addons directory, and make it writable:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" addons\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" -Rf "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" addons\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'superv/*'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" addons/.gitignore\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);