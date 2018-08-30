def sumOfTwo(a,b,v)
	values = {}
	for num in a
		values[num] = true
	end
	for num in b
		if values.has_key? (v - num)
			return true
		end 
	end	
	return false
end

puts sumOfTwo([1, 4, 3, 6, 10, 1, 0, 1, 6, 5], [9, 5, 6, 9, 0, 1, 2, 1, 6, 10], 8); # true
puts sumOfTwo([1, 2, 3], [10, 20, 30, 40], 50); # false
puts sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42); # true
puts sumOfTwo([10, 1, 5, 3, 8], [100, 6, 3, 1, 5], 734); # true