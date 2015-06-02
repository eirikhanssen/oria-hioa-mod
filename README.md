# oria-hioa-mod
Oria customizations on the CSS/HTML/JavaScript level by Oslo and Akershus University College of Applied Sciences (HiOA)

Maintained by Eirik Hanssen, HiOA

## default-files branch
This is the default-files branch with un-altered files from the standard Oria installation. 

## Oria instances

### Debug mode
The oria server merges css rules from different sources, including institution modifications.

To quickly view changes while working on css rules, you have to enable "debug mode" to force the server to re-compile the stylesheets.

This is done by appending ```&wroDevMode=true``` to the end of the oria-url.

### Production instance
- **Production instance**: http://hioa.oria.no
- **Production instance in debug mode**: http://bibsys-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/search.do?vid=HIOA&wroDevMode=true

### Testing instance
- **Test instance**: http://bibsys-primostg.hosted.exlibrisgroup.com:1701/primo_library/libweb/action/search.do?vid=HIOA
- **Test instance in debug mode** http://bibsys-primostg.hosted.exlibrisgroup.com:1701/primo_library/libweb/action/search.do?vid=HIOA&wroDevMode=true

## Branches
- **2014-legacy** - 2013/2014 HiOA modifications to hioa.oria.no. Same as the current production instance.
- **2015-restructuring** - Restructuring hioa.oria.no with new look.
- **default-files** - The original, un-altered files provided by BIBSYS.
- **master** - The current production instance
