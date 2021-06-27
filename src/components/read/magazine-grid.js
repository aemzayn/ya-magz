import { Grid } from "@chakra-ui/react"
import MagazineItem from "./magaizine-item"

const MagazineGrid = ({ items }) => {
  return (
    <Grid
      pt={{ base: 8 }}
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
        xl: "repeat(5, 1fr)",
      }}
      gap={{ base: 2, xl: 4 }}
    >
      {items?.map(item => (
        <MagazineItem item={item} key={item.edition} />
      ))}
    </Grid>
  )
}

export default MagazineGrid
