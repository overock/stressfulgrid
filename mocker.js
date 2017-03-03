//faker.locale = 'ko';
var Mocker = {
  add: function(n, ret) {
    var startTime = new Date();
    if(!ret) ret = [];

    for(var i =0; i<n; ++i) {
      ret.push({
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        birthdate: faker.date.past(50, '2005-12-31').toISOString().slice(0, 10),
        address: faker.fake('{{address.streetAddress}}, {{address.city}}'),
        zipCode: faker.address.zipCode(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        company: faker.company.companyName(),
        catchPhrase: faker.company.catchPhrase(),
        signature: faker.lorem.sentence(),
        n01: faker.random.number(100),
        n02: faker.random.number(100),
        n03: faker.random.number(100),
        n04: faker.random.number(100),
        n05: faker.random.number(100),
        n06: faker.random.number(100),
        n07: faker.random.number(100),
        n08: faker.random.number(100),
        n09: faker.random.number(100),
        n10: faker.random.number(100),
        n11: faker.random.number(100),
        n12: faker.random.number(100),
        n13: faker.random.number(100),
        n14: faker.random.number(100),
        n15: faker.random.number(100),
        n16: faker.random.number(100),
        n17: faker.random.number(100),
        n18: faker.random.number(100),
        n19: faker.random.number(100),
        n20: faker.random.number(100),
        n21: faker.random.number(100),
        n22: faker.random.number(100),
        n23: faker.random.number(100),
        n24: faker.random.number(100),
        n25: faker.random.number(100),
        n26: faker.random.number(100),
        n27: faker.random.number(100),
        n28: faker.random.number(100),
        n29: faker.random.number(100),
        n30: faker.random.number(100),
        n31: faker.random.number(100),
        n32: faker.random.number(100),
        n33: faker.random.number(100),
        n34: faker.random.number(100),
        n35: faker.random.number(100),
        n36: faker.random.number(100),
        n37: faker.random.number(100),
        n38: faker.random.number(100),
        n39: faker.random.number(100),
        n40: faker.random.number(100),
        n41: faker.random.number(100),
        n42: faker.random.number(100),
        n43: faker.random.number(100),
        n44: faker.random.number(100),
        n45: faker.random.number(100),
        n46: faker.random.number(100),
        n47: faker.random.number(100),
        n48: faker.random.number(100),
        n49: faker.random.number(100),
        n50: faker.random.number(100)
      });
    }
    
    console.log(new Date() - startTime);

    return ret;
  }
}
//document.body.innerHTML = JSON.stringify(dummyRecords);