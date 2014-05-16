var assert = Npm.require("assert");

describe("Test Group", function(){
  it("A Test", function(){
      console.log("mocha-web: a test executed");
    assert(true, "a true test");
  })
});
