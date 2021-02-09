//public class Main {
//    public static void main(String[] args){
//
//        int x = 5, y = 6, z = 50; // Declaring many variables
//        final int finalNum = 10; // This value will never change
//        String txt = "ASDKLJSDHKJASDHKJASD";
//        System.out.println(txt.indexOf("D"));
//        System.out.println(txt.length());
//
//    }
//}


// --- Types: Int , float, char, boolean, String

// Data types are divided into two groups:
//  Primitives: Byte, short, int, long, float, double, boolean, char
//  Non primitive: String, Arrays, Classes ..


// Type casting: When you assign a value of one primitive data type to another
// data type.
// ----  TWO TYPES OF CASTING : WIDENING - smaller to larger data type
//    NARROWING: - larger to smaller

// SCAPE CHARACTERS: \n - newline , \r - Carriage Return , \t - Tab , \b BackSpace

// NUMBERS ARE ADDED , STRINGS ARE CONCATINATED

// --- For-each loop : exclusively to loop through elements in an array.


//public class Main{
//    public static void main(String args[]){
//
////        for(int i=0; i<5; i++){
////           System.out.println(i);
////        }
////
////        int [] numbs = {5,6,7,8,9};
////        for(int i: numbs){
////            System.out.println(i);
////        }
//
//        String [] cars = {"A","B","C","D"};
//        for(int i=0; i< cars.length;i++){
//            System.out.println(cars[i]);
//        }
//
//        for(String i: cars){
//            if( i == "A"){
//                System.out.println("YES");
//            }
//            else{
//                System.out.println("NO");
//            }
//        }
//    }
//}

//public class Main{
//    public static void main (String[] args){
//        int [][] myNumbers = {{1,2,3,4},{5,6,7}};
//        for(int i=0; i < myNumbers.length; ++i){
//            for(int j=0; j < myNumbers[i].length; ++j){
//                System.out.println(myNumbers[i][j]);
//            }
//        }
//
//    }
//}



///  -------------------------- METHODS ---------------------------- ///

// Method overloading : multiple methods can have the same name with
// different parameters
// Ex: int myMetho(int x) , float myMethod(float x), double myMethod( dou ..)


// Method Scope: variables declared directly inside a method are available
// anywhere in the method following the line of code in which they were
// declared.

//
//public class Main {
//    // Static: means that the method belongs to the Main class and not an
//    // object of the Main class. Not associated with an instance of a class
//    // instead belongs to the class itself.
//
//    // void: means that this method does not have a return value.
//
//    static void myMethod(String fname){
//        System.out.println(fname + " Combariza");
//    }
//
//    public static void main (String[] args){
//        myMethod("Luis");
//    }
//
//
//}
//



///  -------------------------- RECURSION --------------------------- ///
// HALTING CONDITION: Condition where the function stops calling itself.
// preventing infinite loops.


//public class Main{
//    public static void main (String[] args){
//        int result = sum(10);
//        System.out.println(result);
//
//    }
//    public static int sum(int k){
//        if(k>0){
//            System.out.println(k);
//            return k + sum(k-1);
//        }
//        else{
//            return 0;
//        }
//    }
//
//}


// Use recursion to add the numbers between 5 to 10
//public class Main{
//    public static void main(String[] args){
//        int result = sums(5,10);
//        System.out.println(result);
//    }
//
//    public static int sums(int start, int end){
//        if(end > start){
//            System.out.println(end);
//            return end + sums(start, end -1);
//            }
//        else{
//            return end;
//        }
//    }

//}


///  -------------------------- CLASSES --------------------------- ///

// A class is a template for objects, and an object is an instance of a class

// public: Means it can only be accessed by objects ( you need to create an object to access the method )
// static: Means it can be accessed without creating objects



//public class Main{
//    public void fullThrottle(){
//        System.out.println("The car is..");
//    }
//
//    public void speed(int maxSpeed){
//        System.out.println("Max speed is:" + maxSpeed);
//    }
//}



///  ------------------------- CONSTRUCTORS --------------------------- ///
