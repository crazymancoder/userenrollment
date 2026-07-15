const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  	console.log('Headers:', req.headers);

  	const responseText = '{ "Servers": [ { "Version": "mdm-byod", "BaseURL": "https://karthick-mdm.csez.zohocorpin.com:8143/mdm/client/v1/enroll?encapiKey=1G8rvZxo484awlSMYte%2BvB59gIQIOivLztNLQzkkiQiHurrbjTBGU5EmNqnK4gVB%2Fn45rq3Du3meZaC%2FaZ8ducEzXbwvSBwGRFdCV48btXTsGa0M1qR8qNc%3D&templateToken=66bc4f0682a2b7a3bc8618553524d19f" } ] }'
  	const inputStream = Buffer.from(responseText);

  	const responseHeaders = {
    		"Content-Type": "application/json",
    		"Content-Length":inputStream.length
  	};
  	res.writeHead(200, responseHeaders);

  	res.write(inputStream);
  	res.end();
});


router.get("/redirectedDEPJSON", (req, res) => {
	const pssoJSON = '{"code":"com.apple.psso.required","description":"MDM Server requires the user to authenticate with Identity Provider - BY MEMDM","message":"The MDM server requires you to authenticate with your Identity Provider. Please follow the instructions provided by your organization to complete the authentication process - BY MEMDM","details":{"Package":{"ManifestURL":"https://platformsso-profile-url-824074885.development.catalystserverless.com/server/Platform-SSO-Profile/manifest"},"ProfileURL":"https://platformsso-profile-url-824074885.development.catalystserverless.com/server/Platform-SSO-Profile/profile","AuthURL":"https://platformsso-profile-url-824074885.development.catalystserverless.com/server/Platform-SSO-Profile/auth"}}';
	const inputStream = Buffer.from(pssoJSON);
	
	const responseHeaders = {
		"Content-Type": "application/json",
		"Content-Length":inputStream.length
	};
	
  	res.writeHead(403, responseHeaders);
	res.write(inputStream);
	res.end();
})

module.exports = router;
