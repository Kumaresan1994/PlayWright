//Launch browser based on the browser name
function launchBrowser(browserName) {
    if (browserName.toLowerCase() === "chrome") {
    console.log("Launching Chrome browser");
    } else {
    console.log("Launching " + browserName + " browser");
    
    }
}
    //Run tests based on the test type
    function runTests(testType) {
    switch (testType.toLowerCase()) {
    case "smoke":
    console.log("Running smoke tests");
    break;
    case "sanity":
    console.log("Running sanity tests");
    break;
    case "regression":
    console.log("Running regression tests");
    break;
    default:
    console.log("Running regression tests");
}}
//Calling functions
launchBrowser("Chrome");
runTests("regression");