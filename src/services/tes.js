$jsonString = '{"status":"success","message":"User Login successfully","user":{"id":1,"name":"Super Admin","email":"wurood.jibreel@paltel.ps","email_verified_at":null,"district":"nablus","locality":"nablus","landline":"nablus","mobile_number":"592222183","role":1,"company_id":1,"created_at":"2023-03-23T09:59:24.000000Z","updated_at":"2023-03-23T09:59:24.000000Z","personal_id":11221331,"years_of_driving":0},"authorisation":{"accessToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2ODM0NzY5MzIsImV4cCI6MTY4MzQ3Njk5MiwibmJmIjoxNjgzNDc2OTMyLCJqdGkiOiJHWlFuTDNmYTlBMlhSbkpBIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.M72INFoBkAT_syXhjNpdIJ3TvOnqvnIINrz2bLQ-In0","type":"bearer","expire_in":60}}';

// Parse the JSON string into a PHP array
$data = JSON.parse($jsonString, true);
//console.log($data['authorisation']['accessToken']);
// Modify the data in the array
$data['authorisation']['accessToken'] = 40;
$data['email'] = 'john.doe@example.com';

// Encode the modified array back into a JSON string
$jsonString = JSON.stringify($data);

// Output the updated JSON string
console.log($jsonString);