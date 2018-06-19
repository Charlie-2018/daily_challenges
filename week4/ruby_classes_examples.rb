class User
   attr_accessor :name, :email

  def initialize(name="Anonymous", email="test@example.com")
     @name = name
     @email = email
  end

  def create_welcome_message
    p "Welcome #{@name}, please respond to our confirmation email sent to: #{@email}"
  end
end

user1 = User.new("Groot", "e@example.com")

p user1.name
p user1.email

user1.create_welcome_message

# class Person
# @ implies a variable that is available to any method in the class AND have information that is private to each instance

#   attr_accessor :name, :age, :city
#
#   def initialize(name, age)
# 	  @name = name
# 	  @age = age
#     @city
#   end
#
#   def show_person
#     p @given_name
#   	p @age
# 	  p @city
#   end
# end
#
# me = Person.new("Arthur Dent", 30)
#
# p me.name
#
# me.city = "SD"
#
# p me.city


class Fruit
  def initialize(x,y)
    @vitamins = [x,y]
  end

  def show_vitamins
    @vitamins
  end

  def add_vitamin(vitamin)
    @vitamins << vitamin
  end
end

# apple = Fruit.new("C", "D")
#
# p apple.show_vitamins

# oranges = Fruit.new("Calcium", "Zinc")
#
# print oranges.show_vitamins
#
# oranges.add_vitamin("D")
#
# print oranges.show_vitamins

# p apple.class


class Animal

  attr_accessor :color, :attitude

  def initialize(x,y)
    @attitude = x
	  @color = y
  end

  def introduce
    p "this animal is #{@attitude} and #{@color}"
  end

  def fetch
  	p "I got the thing"
  end
end

class Kitten < Animal
	def initialize(color, attitude, name)
    super(attitude, color)
		@name = name
	end
end

tabby = Kitten.new("Orange", "sleepy", "Oliver")

p tabby.attitude
#
tabby.attitude = "sweet"

p tabby.attitude

if tabby.respond_to?("fetch")

#
# p tabby
#
#
# kitten = Animal.new("cute", "orange")
# kitten.show_attitude
# p kitten.color
#
#
#
# kitten.fetch()
#
# kitten.attitude = "psychotic"
# kitten.show_attitude
# puppy = Animal.new("energetic")
#
# p kitten
# p puppy
#
# kitten.show_attitude


# ------------------------------------------------------- SOME HELPFUL METHODS
#
# x = "this is a string"
# p x.class
# p x.respond_to?("reverse")
#
# BUT...this does not work:
# p x.respond_to?("to_i")
