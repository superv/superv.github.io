(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{299:function(a,e,s){"use strict";s.r(e);var t=s(38),r=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("h3",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),s("p",[a._v("superV has the following requirments:")]),a._v(" "),s("ul",[s("li",[a._v("Laravel 5.8+ or 6.*")]),a._v(" "),s("li",[a._v("PHP 7.2.0+")]),a._v(" "),s("li",[a._v("NPM (If you are willing to customize the frontend)")])]),a._v(" "),s("h3",{attrs:{id:"install-as-a-composer-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-as-a-composer-package","aria-hidden":"true"}},[a._v("#")]),a._v(" Install as a Composer Package")]),a._v(" "),s("p",[a._v("Pull in the latest superV Platform package:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("composer require superv/platform\n")])])]),s("p",[a._v("Run the installer")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan superv:install\n")])])]),s("p",[a._v("Installer will try to complete the following configurations for you:")]),a._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/basics/configuration.html#configure-composer-json-for-the-merge-plugin"}},[a._v("Configure composer.json for the Merge Plugin")])],1),a._v(" "),s("li",[s("router-link",{attrs:{to:"/basics/configuration.html#create-a-full-privileged-user"}},[a._v("Create a full privileged User")])],1),a._v(" "),s("li",[s("router-link",{attrs:{to:"/basics/configuration.html#create-the-addons-directory"}},[a._v("Create the Addons directory")])],1)]),a._v(" "),s("p",[a._v("Install the composer package for Admin Panel addon:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("composer require superv/admin-panel\n")])])]),s("p",[a._v("Install the Admin Panel")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan addon:install superv.panels.admin\n")])])]),s("p",[a._v("You can now navigate to "),s("code",[a._v("http://your-base-hostname/admin")]),a._v(" using your browser and login with the user credentials you created during the installation process.")]),a._v(" "),s("h3",{attrs:{id:"install-as-a-fresh-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-as-a-fresh-project","aria-hidden":"true"}},[a._v("#")]),a._v(" Install as a Fresh Project")]),a._v(" "),s("p",[a._v("Create project with composer in your terminal:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("composer create-project superv/superv-project \n")])])]),s("p",[a._v("Your web server should point to project's "),s("code",[a._v("public")]),a._v(" folder for your hostname (eg: "),s("code",[a._v("superv.test")]),a._v("). Just as it would in a normal Laravel application.")]),a._v(" "),s("p",[a._v("Required directory permissions are also same with a normal laravel application with one exception, which is the "),s("code",[a._v("addons")]),a._v(" folder. So make sure this folder is writable by your web server too.")]),a._v(" "),s("p",[a._v("Next, create a database and add your credentials to your "),s("code",[a._v(".env")]),a._v(" file:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DB_HOST=localhost\nDB_DATABASE=superv\nDB_USERNAME=superv\nDB_PASSWORD=secret\n")])])]),s("p",[a._v("And install superV")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan superv:install\n")])])]),s("p",[a._v("Install the Admin Panel")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan addon:install superv.panels.admin\n")])])]),s("p",[a._v("You can now navigate to "),s("code",[a._v("http://your-base-hostname/admin")]),a._v(" using your browser and login with the user credentials you created during the installation process.")])])},[],!1,null,null,null);e.default=r.exports}}]);