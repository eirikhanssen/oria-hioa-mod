# oria-hioa-mod
Oria customizations on the CSS/HTML/JavaScript level by Oslo and Akershus University College of Applied Sciences (HiOA)

Maintained by Eirik Hanssen, HiOA

## Oria instances

### Debug mode
The oria server merges css rules from different sources, including institution modifications.

To quickly view changes while working on css rules, you have to enable "debug mode" to force the server to re-compile the stylesheets.

This is done by appending ```&wroDevMode=true``` to the end of the oria-url.

### Production instance
- **Production instance**: http://hioa.oria.no
- **Production instance in debug mode**: http://bibsys-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/search.do?vid=HIOA&wroDevMode=true

### Testing instances
- **Test instance**: http://bibsys-primostg.hosted.exlibrisgroup.com:1701/primo_library/libweb/action/search.do?
vid=HIOA
- **Test instance - welcome page in debug mode** 
    - http://bibsys-primostg.hosted.exlibrisgroup.com:1701/primo_library/libweb/action/search.do?vid=HIOA&wroDevMode=true
- **Test instance - search hits page in debug mode**
    - http://bibsys-primostg.hosted.exlibrisgroup.com:1701/primo_library/libweb/action/search.do?fn=search&ct=search&initialSearch=true&mode=Basic&tab=default_tab&indx=1&dum=true&srt=rank&vid=HIOA&frbg=&tb=t&vl%28freeText0%29=xslt&scp.scps=scope%3A%28SC_OPEN_ACCESS%29%2Cscope%3A%28%22HIOA%22%29%2CHIOA1_EbscoLocal%2CHIOA2_EbscoLocal%2Cprimo_central_multiple_fe&wroDevMode=true

## Branches
- **2014-legacy** - 2013/2014 HiOA modifications to hioa.oria.no. Same as the current production instance.
- **2015-restructuring** - Restructuring hioa.oria.no with new look. This is now on the test instance.
- **default-files** - The original, un-altered files provided by BIBSYS.
- **master** - The current production instance

## CSS now generated with SASS
This change was introduced May 19 2015 to simplify css management.

SASS is a CSS compiler.
HIOA.css and HIOA_Mobile.css here are not meant to be edited directly,
they are generated from .scss files usin sass.

First ruby needs to be installed, then install sass using ```gem install sass```

After sass is installed, it can be set up to watch the _scss folder for changes and 
automatically update HIOA.css and HIOA_Mobile.css using the following command (on your local
development machine). 

```sass --watch _scss:.```

**Notice**: *You would upload only HIOA.css and HIOA_Mobile.css to the server, not 
the .scss or .map files, nor the _scss folder used by sass.*

### A few links to get you started with sass
- http://sass-lang.com/install
- http://sass-lang.com/guide
- http://sass-lang.com/documentation/file.SASS_REFERENCE.html
    - See **Using Sass**: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass
- http://alistapart.com/article/getting-started-with-sass
