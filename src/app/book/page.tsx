'use client'

import { useState } from 'react'
import { content } from '@/lib/content'
import { format, addDays } from 'date-fns'

export default function BookPage() {
  const [selectedPackage, setSelectedPackage] = useState<number>(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  
  const bookContent = content.en.book
  const prices = content.en.service.prices

  // Generate next 14 days
  const availableDates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i + 1))
  
  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ]

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time')
      return
    }

    const selectedPrice = prices[selectedPackage]
    console.log('Booking:', {
      package: selectedPrice.title,
      price: selectedPrice.price,
      date: format(selectedDate, 'yyyy-MM-dd'),
      time: selectedTime
    })
    
    alert(`Booking confirmed for ${selectedPrice.title} on ${format(selectedDate, 'MMMM d, yyyy')} at ${selectedTime}`)
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-thin text-primary mb-6">
              {bookContent.title}
            </h1>
            <p className="text-xl font-light text-gray-600">
              {bookContent.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Package Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-light text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Choose Your Package
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {prices.slice(0, 3).map((price, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPackage(index)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedPackage === index 
                        ? 'border-accent bg-accent/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h3 className="text-lg font-light text-primary mb-2">
                      {price.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {price.desc}
                    </p>
                    <div className="text-2xl font-thin text-accent">
                      {price.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-light text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Select Date
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                {availableDates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-lg border transition-all duration-300 ${
                      selectedDate && selectedDate.toDateString() === date.toDateString()
                        ? 'border-accent bg-accent text-white'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-xs font-light">
                      {format(date, 'EEE')}
                    </div>
                    <div className="text-lg font-light">
                      {format(date, 'd')}
                    </div>
                    <div className="text-xs font-light">
                      {format(date, 'MMM')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-light text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Select Time
              </h2>
              
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border transition-all duration-300 ${
                      selectedTime === time
                        ? 'border-accent bg-accent text-white'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary & Payment */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-light text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                Confirm & Pay
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-light">Package:</span>
                  <span className="font-light">{prices[selectedPackage].title}</span>
                </div>
                {selectedDate && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-light">Date:</span>
                    <span className="font-light">{format(selectedDate, 'MMMM d, yyyy')}</span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-light">Time:</span>
                    <span className="font-light">{selectedTime}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-lg border-t pt-2 mt-4">
                  <span className="font-light">Total:</span>
                  <span className="font-light text-accent">{prices[selectedPackage].price}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-6 text-center">
                {bookContent.paymentNote}
              </p>
              
              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-accent hover:bg-accent/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-full text-lg font-light transition-all duration-300"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 