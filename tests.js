// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


//unit test for sayHello function
describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!"', function(){
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!" When sayHello("Alex") is called', function(){
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!" When sayHello("Pat") is called', function(){
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!" when no parameters are called', function(){
    expect(sayHello()).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when (true)', function(){
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when (false)', function(){
        expect(sayHello(false)).toBe('Hello, World!');
    });
});


describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });

});