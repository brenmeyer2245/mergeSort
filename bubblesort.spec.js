describe('Bubble Sort', function(){   
    beforeEach(function(){
        
        spyOn(window,'swap').and.callthrough();
    });
    
    
    it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
    
    
    //takes an array and sorts it 
    it('takes an array of numers and sorts it', function(){
      expect(bubbleSort([6,4,3,5,1,2])).toEqual( [1,2,3,4,5,6] );  
    });
    //If it has multiples, it sorts them correctly 
    it('sorts non-unique values along with unique values',function(){
        expect(bubbleSort([4,1,2,2,2])).toEqual([1,2,2,2,4]);
        
       });
    //just 1 
     it('handles an array of one element', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });
     it('throws exception for non numeric values', function(){
    expect( bubbleSort([1,3,2, "Hello"]) ).toEqual( "Error: Non-Numeric Value" );
  });
    
    it('throws exception for non numeric values', function(){
    expect( bubbleSort([1,3,2]) ).toEqual( "Error: Non-Numeric Value" );
  });
    console.log("Swaps:",swap.calls);
});