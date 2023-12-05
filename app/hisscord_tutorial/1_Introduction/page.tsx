import { Container, Text, Breadcrumbs, Anchor, SimpleGrid, Grid } from "@mantine/core";

const LINKS = [
  { title: "Surreal World", href: "/" },
  { title: "Hisscord", href: "/hisscord_tutorial/" },
  { title: "Introduction", href: "/hisscord_tutorial/1_Introduction" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

// export default function N() {
//   return (
//     <SimpleGrid cols={2}>
//       <Container >Left</Container>
//       <Container >Right</Container>
//     </SimpleGrid>
//   );
// }

export default function NameDoesntMatter() {
  return <Container >
    <Breadcrumbs>{LINKS}</Breadcrumbs>

    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'gray', to: 'gray', deg: 35 }}
      style={{marginTop: 25}}
    >
      Introduction
    </Text>

    <Text
      size="xl"
      fw={500}
      style={{marginTop: 25}}
    >
      Introduction is on this side, and we cannot do anything more about it. I need to make more of the typings but you will get what I want to make.
    </Text>
  </Container>;
}
