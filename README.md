# oria-hioa-mod
Oria customizations on the CSS/HTML/JavaScript level by Oslo and Akershus University College of Applied Sciences (HiOA)

Maintained by Eirik Hanssen, HiOA

## master branch
This branch contains the files currently used in the production instance.
At the moment it is in the same state as the 2014-legacy branch with the HiOA oria appearance modifications done in 2013/2014.

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
The different versions of the HiOA Oria customizations are located in separate branches facilitate hassle free:
- maintenance
- development
- testing new ideas
- comparison
- ability to roll back to a different version.

### Branch descriptions
- **2014-legacy** - 2013/2014 HiOA modifications to hioa.oria.no. Same as the current production instance.
- **2015-restructuring** - Restructuring hioa.oria.no with new look. This is now on the test instance.
- **default-files** - The original, un-altered files provided by BIBSYS.
- **master** - The current production instance
