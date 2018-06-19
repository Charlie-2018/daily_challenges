# RUBY CLASSES

# PART ONE: BASIC CLASS DECLARATION -------------------------------------------------------------------------------------------

# Here is a very basic Ruby class:

class User
end

# Notice that:
# 1. Ruby uses a capital letter for class names
# 2. Ever class must be closed with the word "end"

# We create an instance of the class User like this:

user1 = User.new

# PART TWO: ADDING METHODS --------------------------------------------------------------------------------------------

# That class is not very useful though, lets add a method to the User class:

class User
  def sign_in
    print "User has signed in!"
  end
end

# Notice that:
1. The method is defined with its own "def" and "end" block

# We can call the sign_in method using dot notation like this:

user1 = User.new

user1.sign_in

# PART THREE: INITIALIZE --------------------------------------------------------------------------------------------

# We can add methods to a class and create instances of a class, but we can be more efficient with the creation of classes by declaring an initialize method:

class User
  def initialize(name)
    print name
  end
end

# Notice that:
# 1. Initialize is a special method that gets called automatically when you use the "new" keyword to create an instance of a class
# 2. This initialize method is taking one argument (name), this means that when you create a new User, you must supply a name property

# We can create a new User like this:
user1 = User.new("Jean-luc Picard")

# Creating a new user without passing in a name property will result in an error
user2 = User.new # this won't work

# PART 4: INSTANCE VARIABLES -----------------------------------------------------------------------------------------------

# Instance variables are special variables for use in Ruby classes, you can recognize them by the "@" symbol before the variable name.

# There are a couple of things to remember about instance variables:
# 1. Once an instance variable is created, it belongs to the whole class and can be accessed in any methods that belong to the class
# 2. Instance variables hold information that will be different for each instance of a class. In this example, every instance of User will have a name property (key), but they will each have unique name values

class User
  def initialize(name)
    @name = name
  end
end

# Notice that we use the initialize method to take in a name value when we instantiate a new user. 
# The value supplied as the argument to the initialize method is used as the value of the @name instance variable

user1 = User.new("Hans Solo")
user2 = User.new("Malcolm Reynolds")

# We have now created two users, each with their own name property. 
