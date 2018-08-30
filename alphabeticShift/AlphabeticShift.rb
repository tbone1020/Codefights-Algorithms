def alphabeticShift(str)
	alphabet = Array['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a']
	newStr = ""
	strArr = str.split('')	
	for letter in strArr
		newLetter = alphabet.index(letter) + 1
		newStr += alphabet[alphabet.index(letter) + 1]
	end
	return newStr
end

puts alphabeticShift("aaaabbbccd"); # bbbbcccdde
puts alphabeticShift("codesignal"); # dpeftjhobm
puts alphabeticShift("crazy") # dsbaz