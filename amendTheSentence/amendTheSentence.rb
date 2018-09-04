def amendTheSentence(str)
	sentence = ""
	spStr = str.split(/(?:([A-Z]{1}[a-z]*))/)	
	for word in spStr
		if word != ''
            		sentence += word + " ";
        	end
	end
	return sentence
end

puts amendTheSentence("TrentTeebkenIsAFrontEndEngineer"); # Trent Teebken Is A Front End Engineer
puts amendTheSentence("CodeSignal"); # Code Signal
puts amendTheSentence("ICanWriteCodeInRuby"); # Code Signal
