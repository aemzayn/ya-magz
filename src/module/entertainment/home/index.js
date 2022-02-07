import { VStack } from "@chakra-ui/react"
import PodcastCard from "./PodcastCard"
import config from "@/cms/site-settings.json"

export default function HomeEntertainment() {
  return (
    <VStack px={{ base: 8, md: 0 }} spacing={{ base: 4, md: 6, lg: 8 }}>
      <PodcastCard
        title="Ya! Podcast"
        coverUrl={config.podcast_cover_url}
        tag="PODCAST"
        tagColor="purple"
        desc="Ya!Pod is here! Masih belum dengerin episode Ya!Pod bareng @sahrultdg, @mdavine05_, dan @khalismrsyd? Yuk langsung aja klik link di bio kita buat streaming episode-episode Ya!Pod. Don’t forget, we are new every Monday!"
        spotifyUrl="https://open.spotify.com/show/7mpdCpFNVp9U4BvUXYEoPz"
        appleUrl="https://podcasts.apple.com/tr/podcast/ya-pod/id1499375022"
        googleUrl="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xM2RjZGIwYy9wb2RjYXN0L3Jzcw%3D%3D"
      />
      <PodcastCard
        title="Mood vol .05: SUMMER"
        desc="Menikmati liburan musim panas dengan lagu-lagu yang bakal ngebuat kamu betah berlama-lama untuk menikmatinya"
        coverUrl="/images/mood/v5/mood-v5-cover.jpg"
        tag="PLAYLIST"
        tagColor="blue"
        spotifyUrl="https://open.spotify.com/playlist/2K19a0sPgjI1rG097PsOaP"
        reverse
      />
    </VStack>
  )
}
