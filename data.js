async function getProfileDetails() {
  try{  
  let gqlResult = await fetch('http://localhost:7082/graphql', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "X-app-clnt-id": "an0dUUuSA9CNqZkHskcLUuhXw6x4KvBd",
            "X-dev-id": "1a02dafafb3f8f23",
            "X-acs-tkn": "g44ZlKcvm7DUiekgLGjkZ2XMBKXtlQDj"
        },
        body: JSON.stringify({
            query: `{
              userProfile {
                name
                contactDetails {
                  primaryNumber {
                    countryCode
                    number
                  }
                  alternateNumber {
                    countryCode
                    number
                  }
                  email
                }
                addressDetails {
                  addressLine1
                  addressLine2
                  addressLine3
                  district
                  city
                  state
                  pincode
                }
              }
            }`
        })
    });
    let userDetails = await gqlResult.json();
    console.log(userDetails.data);
    document.getElementById("userDetailsContainer").textContent = JSON.stringify(userDetails, undefined, 2);
  } catch(e) {
    document.getElementById("userDetailsContainer").textContent = JSON.stringify(e, undefined, 2);
  }

}