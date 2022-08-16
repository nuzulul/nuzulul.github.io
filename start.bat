<!-- :: Batch section
@echo off
setlocal

echo %computername%

echo Select an option:
for /F "delims=" %%a in ('mshta.exe "%~F0"') do set "HTAreply=%%a"
echo End of HTA window, reply: "%HTAreply%"
rem ------------------SCRIPT------------------------------------------
if %HTAreply%==1 (
bundle install
)
if %HTAreply%==2 (
bundle exec jekyll serve
)
rem ------------------END SCRIPT------------------------------------------
goto :EOF
-->


<HTML>
<HEAD>
<HTA:APPLICATION SCROLL="no" SYSMENU="no" >

<TITLE>HOOK MENU</TITLE>
<SCRIPT language="JavaScript">
window.resizeTo(374,300);

function closeHTA(reply){
   var fso = new ActiveXObject("Scripting.FileSystemObject");
   fso.GetStandardStream(1).WriteLine(reply);
   window.close();
}

</SCRIPT>

<STYLE>
button {
width:300px;
}
</STYLE>

</HEAD>
<BODY>
   <button onclick="closeHTA(1);">bundle install</button>
   <button onclick="closeHTA(2);">bundle exec jekyll serve</button>
   <button onclick="closeHTA(0);">EXIT</button>
</BODY>
</HTML>