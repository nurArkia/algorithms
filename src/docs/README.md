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

#### 1. star with simple examples 
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

## Solve/Simplify

## Look Back and Refactor

[1]: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/
[2]: https://www.amazon.com/gp/product/B0073X0IOA/ref=x_gr_bb_kindle?caller=Goodreads&tag=x_gr_bb_kindle-20