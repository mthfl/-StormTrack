import React, { useState } from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiThunderstorm, WiSnow, WiFog, WiDayCloudy } from 'react-icons/wi';

function Box() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const API_KEY = '8dabaf57271078343cae45e8c564fcfd';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    const handleSearch = async () => {
        if (city.trim() !== '') {
            setLoading(true);
            try {
                // Normaliza a cidade para garantir consistência (remove espaços extras e converte para minúsculas)
                const normalizedCity = city.trim().toLowerCase();
                
                const response = await fetch(
                    `${API_URL}?q=${normalizedCity}&appid=${API_KEY}&units=metric&lang=pt_br`
                );
                
                if (!response.ok) {
                    throw new Error('Cidade não encontrada ou erro na busca');
                }
                
                const data = await response.json();
                setWeatherData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setWeatherData(null);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleClear = () => {
        setCity('');
        setWeatherData(null);
        setError(null);
    };

    const getWeatherIcon = (weatherId) => {
        if (weatherId === 800) return <WiDaySunny className="text-[#023059] w-12 h-12 sm:w-16 sm:h-16" />;
        if (weatherId >= 801 && weatherId <= 804) return <WiCloudy className="text-[#023059] w-12 h-12 sm:w-16 sm:h-16" />;
        if (weatherId >= 500 && weatherId <= 531) return <WiRain className="text-[#023059] w-12 h-12 sm:w-16 sm:h-16" />;
        if (weatherId >= 200 && weatherId <= 232) return <WiThunderstorm className="text-[#023059] w-12 h-12 sm:w-16 sm:h-16" />;
        if (weatherId >= 600 && weatherId <= 622) return <WiSnow className="text-[#023059] w-12 h-12 sm:w-16 sm:h-16" />;
        if (weatherId >= 701 && weatherId <= 781) return <WiFog className="text-[#023059] w-12 h-12 sm:w-16 sm:h-16" />;
        return <WiDayCloudy className="text-[#023059] w-12 h-12 sm:w-16 sm:h-16" />;
    };

    const containerHeight = weatherData || error ? 'h-[450px] sm:h-[500px]' : 'h-[80px] sm:h-[100px]';

    return (
        <div className={`rounded-2xl w-full sm:w-[400px] ${containerHeight} bg-gradient-to-br from-[#D2D6D9] to-[#8D95A6] 
            shadow-xl p-4 sm:p-6 transition-all duration-500 ease-in-out hover:shadow-2xl`}>
            
            <div className="flex justify-center mb-4 sm:mb-6 gap-2">
                <div className="relative w-full max-w-[200px] sm:max-w-[240px]">
                    <input 
                        type="search" 
                        placeholder="Nome da cidade"
                        className="w-full h-10 sm:h-12 px-4 pr-10 rounded-full text-center 
                            bg-white/90 backdrop-blur-sm border border-[#5E6D8C]/50 text-[#023059]
                            focus:outline-none focus:ring-2 focus:ring-[#023E73] 
                            focus:border-transparent shadow-sm placeholder-[#5E6D8C]
                            transition-all duration-200 disabled:opacity-50 text-sm sm:text-base"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        disabled={loading}
                    />
                    {(city || weatherData || error) && !loading && (
                        <button
                            onClick={handleClear}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 
                                text-[#023059] hover:text-[#023E73] transition-colors duration-200"
                        >
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" 
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                    strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="h-10 sm:h-12 w-10 sm:w-12 bg-[#5E6D8C] text-[#D2D6D9] rounded-full 
                        flex items-center justify-center hover:bg-[#8D95A6] 
                        disabled:opacity-50 transition-all duration-200 shadow-md"
                >
                    {loading ? (
                        <div className="animate-spin rounded-full h-5 sm:h-6 w-5 sm:w-6 border-2 
                            border-[#D2D6D9] border-t-transparent"></div>
                    ) : (
                        <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" 
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                                strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    )}
                </button>
            </div>

            {error && !loading && (
                <div className="text-red-500 text-center bg-red-100/50 p-3 rounded-lg 
                    border border-red-200/50 mb-4 animate-fade-in text-sm sm:text-base">
                    {error}
                </div>
            )}

            {weatherData && !loading && (
                <div className="text-center animate-fade-in">
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 mb-4">
                        <div className="flex justify-center mb-3 sm:mb-4">
                            {getWeatherIcon(weatherData.weather[0].id)}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#023059] truncate">
                            {weatherData.name}, {weatherData.sys.country}
                        </h2>
                        <p className="text-4xl sm:text-5xl font-light text-[#023E73] my-3 sm:my-4 tracking-tight">
                            {Math.round(weatherData.main.temp)}°C
                        </p>
                        <p className="text-base sm:text-lg text-[#5E6D8C] capitalize bg-[#D2D6D9]/50 
                            inline-block px-3 py-1 rounded-full">
                            {weatherData.weather[0].description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-[#023059]">
                        <div className="bg-[#D2D6D9]/80 p-2 sm:p-3 rounded-lg">
                            <p className="text-xs sm:text-sm">Umidade</p>
                            <p className="font-semibold text-sm sm:text-base">{weatherData.main.humidity}%</p>
                        </div>
                        <div className="bg-[#D2D6D9]/80 p-2 sm:p-3 rounded-lg">
                            <p className="text-xs sm:text-sm">Vento</p>
                            <p className="font-semibold text-sm sm:text-base">{weatherData.wind.speed} m/s</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Box;