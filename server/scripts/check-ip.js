/**
 * Run: node scripts/check-ip.js
 * Shows your public IP and MongoDB Atlas whitelist instructions
 */
fetch('https://api.ipify.org?format=json')
  .then((r) => r.json())
  .then(({ ip }) => {
    console.log('\n========================================');
    console.log('YOUR PUBLIC IP:', ip);
    console.log('========================================');
    console.log('\nTo fix MongoDB connection:');
    console.log('1. Go to: https://cloud.mongodb.com/');
    console.log('2. Network Access -> Add IP Address');
    console.log('3. Click "ALLOW ACCESS FROM ANYWHERE"');
    console.log('4. Confirm and wait 1-2 minutes, then restart server');
    console.log('\n========================================\n');
  })
  .catch(() => console.log('Add 0.0.0.0/0 in Atlas Network Access.'));
