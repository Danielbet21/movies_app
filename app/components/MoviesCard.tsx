import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MoviesCard = ({id, title, poster_path , vote_average, release_date}: Movie) => {
  return (
      <Link href={`/movies/${id}`} asChild>
          <TouchableOpacity className="w-[30%]">
              <Image
                  source={{
                      uri: poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://via.placeholder.com/600x400/1a1a1a/ffffff.png`
                  }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover" 
              />              
                <Text className="text-white font-bold text-center" numberOfLines={1}>{title}</Text>
                <Text className="text-sm text-yellow-500 text-center font-bold">{vote_average.toFixed(1)}</Text>
                <Text className="text-sm text-gray-400 text-center">{release_date?.split('-')[0]}</Text>
      </TouchableOpacity>
      </Link>
  )
}

export default MoviesCard