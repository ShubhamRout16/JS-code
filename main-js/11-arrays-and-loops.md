<!-- ! ARRAYS -->
1. arrays are special type of objects which can store a list of values
2. arrays can store number, string, boolean, object, & array itself inside of it.
3. ARRAYS METHODS :- 
-> length => which tells total number of elements inside of an array
-> push => which adds an value at the end of an array
-> splice => which removes the value from specific index
   -> splice(position1, position2) => position1 where index from which starting point to remove 
   ->                                => posiiton2 specifies how many values to remove from position1 index.
4. arrays are references just like objects in js 
-> arr 1 = smthng & if arr2 = arr1 then arr1 & arr2 have same references it means if any changes are made in arr1 then changes will also happen in arr2 
-> to avoid this we have method in js which is called slicing => slice()
-> which makes a copy of original array and if changes are madde in copy then NO changes will occur in original array.
5. DESTRUCTURING => it is shortcut to take values out from an array
-> const [firstValue , secondValue ] = [1,2,3] => then 1 will be stored in => firstValue & similarly 2 will be stored in => secondValue.

<!-- ! LOOPS -->
1. loops have 2 features called break and continue
-> break - break allows to exit the code early.
-> continue - continue allows us to skip 1 iteration of loop.
-> in while loop we have to do the increment step manually or otherwise continue will cause to go on infinte loop.
-> return is also one method to breaking early out of loop.