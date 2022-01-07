# Problem Solving Approach

###### source:🔗 [udemy javascript algorithms ][1]
###### Note:📖 the strategies are adapted from [_How to Solve It_][2]

## Understand The problem 
### 1. Can I restate the problem in my own words?
### 2. what are the inputs that go into the problem
### 3. wha are the outputs that should come from the solution to the problem
### 4. can the outputs be determined from the inputs?
###### In other words, do I have enough information to solve the problem (you may not be able to answer this question until you set about solving the problem, that's okay. it's still worth considering the question at this early stage.)
### 5. How should I label the important pieces of data that are a part of the problem?

### Example: 
    // Write a funtion which takes two numbers and returns their sum

    // 1. Can I restate the problem in my own words?
        implement addition

    // 2. what are the inputs that go into the problem
        what type? , how large? 

    // 3. wha are the outputs that should come from the solution to the problem
        what the type ?

    // 4. an the outputs be determined from the inputs?
        what about invalid inputs ? what to return ?

    // 5. How should I label the important pieces of data that are a part of the problem?
        names for the function and the inputs, outputs 
        *(later in the course we will see more examples where it will help 😀)


## Explore Concrete Example

* #### coming up with examples can help you understand the problem better
* #### examples also provide sanity checks that your eventual solution works how it should
* #### User Stories!, Unit Tests!

#### 1. start with simple examples 
#### 2. Progress to more complex examples
#### 3. Explore examples with empty inputs
#### 4. Explore examples with invalid inputs

### Example:

    Write a funtion which takes in a string
    and returns counts of each character in the string

    charCount("aaaa"); {a:4, b:0, c:0} // is the letters already there and we increment only?  
    charCount("hello"); {h:1, e:1, l: 2, o: 1}
    "my phone numner is 183489" // are we counting  all characters(increment space, sympolys ..) or letters only
    "hi How are u" // is case sensitive {h:1, i:1, H:1 ...} or {h:2, i:1, o:1 ...}

## Break It Down 

### Explicitly write out the steps you need to take.

This force you to think about the code you'll write before you write it,
and helps you catch any lingering conceptual issues or misunderstandings
before you dive in and have to worry about details (e.g. language syntax) as well.

### Example: 

````
    show the process of how you will solve the problem 
    
    function charCount(str) {
        
        // make object to return at end
            // the object will hold the count of each char in the string
            // {char(key): count(number)}
        
        //loop over strin, for each char....
            // if the char is a number/letter AND is key in object, add one to counter
            // if the char is a number/letter AND is not in object, add it and set value to 1
            // if character is something else (space, dot, etc ...) don't do anything 
        
        //return object at end           
    }
````

## Solve/Simplify

### solve the problem, _if you can't_ then solve a simpler version of the problem!

### SIMPLIFY

* Find the core difficulty in what you're trying to solve.
* Temporarily ignore that difficulty
* Write a simplified solution
* then incorporate that difficult back in


### Example:

````    

    // version 1 -in the loop count all characters and ignore upper/lower
    // version 2 -in the loop count all characters
    // version 3 - only letters and numbers
    function charCount(str: string) {
    
        // make object to return at end
        const result: any = {};
        
        //loop over string, for each char....
        
        for(let i = 0; i < str.length; i++) {
            let char = str[i].toLowerCase(); // version 2 - case insensitive
    
            // version 3 - only letters and numbers
            if (!(/[a-z0-9]/.test(char))) {
                continue;
            }
    
            // if the char is key in object, add one to counter
            if(result[char] > 0) {
                result[char]++ //  result[char] = result[char] + 1
            }
            else {
                // if the char is  is not in object, add it and set value to 1
                result[char] = 1;
            }
        }
    
        //return object at end
        return result;
    }   
 
````

## Look Back and Refactor

### Refactoring Questions to ask yourself

* Can u check the result ? (is it working)
* Can u derive the result differently ? (is there other ways)
* Can u understand it at a glance ? (is it easy to read)
* Can u use the result or method for some other problem ? (reusable code)
* Can u improve the performance of your solution ? (space and time complexity (n))
* Can u think of others  ways to refactor ? (follow guidelines)
* How have other people solved this problem ? (check others solutions - even in different language)

#### you don't have to change your code but at lest look back and see how can u improve :)

````
    function charCount(str: string) {
        const result: any = {};
        
        for(let char of str) {
            char = char.toLowerCase();

            // regex - impact the performance
            if (/[a-z0-9]/.test(char)) {
                result[char] = ++result[char] || 1
            }
        }
        
        return result;
    }
````


[1]: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/
[2]: https://www.amazon.com/gp/product/B0073X0IOA/ref=x_gr_bb_kindle?caller=Goodreads&tag=x_gr_bb_kindle-20