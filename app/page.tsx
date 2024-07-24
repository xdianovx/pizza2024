import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [
                      {
                        id: 1,
                        price: 300,
                      },
                      {
                        id: 2,
                        price: 300,
                      },
                      {
                        id: 3,
                        price: 300,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [
                      {
                        id: 1,
                        price: 300,
                      },
                      {
                        id: 2,
                        price: 300,
                      },
                      {
                        id: 3,
                        price: 300,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [
                      {
                        id: 1,
                        price: 300,
                      },
                      {
                        id: 2,
                        price: 300,
                      },
                      {
                        id: 3,
                        price: 300,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [
                      {
                        id: 1,
                        price: 300,
                      },
                      {
                        id: 2,
                        price: 300,
                      },
                      {
                        id: 3,
                        price: 300,
                      },
                    ],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 11,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [
                      {
                        id: 1,
                        price: 300,
                      },
                      {
                        id: 2,
                        price: 300,
                      },
                      {
                        id: 3,
                        price: 300,
                      },
                    ],
                  },
                  {
                    id: 21,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [
                      {
                        id: 1,
                        price: 300,
                      },
                      {
                        id: 2,
                        price: 300,
                      },
                      {
                        id: 3,
                        price: 300,
                      },
                    ],
                  },
                  {
                    id: 31,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [
                      {
                        id: 1,
                        price: 300,
                      },
                      {
                        id: 2,
                        price: 300,
                      },
                      {
                        id: 3,
                        price: 300,
                      },
                    ],
                  },
                  {
                    id: 41,
                    name: "Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [
                      {
                        id: 1,
                        price: 300,
                      },
                      {
                        id: 2,
                        price: 300,
                      },
                      {
                        id: 3,
                        price: 300,
                      },
                    ],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
