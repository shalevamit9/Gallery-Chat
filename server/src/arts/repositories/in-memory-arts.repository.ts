import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IArtsRepository } from '../interfaces/arts.repository.interface';
import { Art, ArtSearchKeys } from '../types/arts.type';

@Injectable()
export class InMemoryArtsRepository implements IArtsRepository {
  private readonly arts: Art[] = [
    {
      id: 1,
      artistName: 'Scott Listfield',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'RV Dusk',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/rv-dusk-scott-listfield.jpg',
    },
    {
      id: 2,
      artistName: 'Cherry Blossom Bridle Path Central Park',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Beverly Brown',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/cherry-blossom-bridle-path-central-park-beverly-brown.jpg',
    },
    {
      id: 3,
      artistName: 'Robert Papp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Heirloom Tomatoes Painting',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/heirloom-tomatoes-robert-papp.jpg',
    },
    {
      id: 4,
      artistName: 'Scott Listfield',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'The Coke Machine',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/2-the-coke-machine-scott-listfield.jpg',
    },
    {
      id: 5,
      artistName: 'Robert Papp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Mushrooms',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/mushrooms-robert-papp.jpg',
    },
    {
      id: 6,
      artistName: 'Beverly Brown',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Hummingbird Watercolor Bird',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/hummingbird-watercolor-bird-painting-beverly-brown-prints.jpg',
    },
    {
      id: 7,
      artistName: 'Mariusz Szmerdt',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Black Cat',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/black-cat-mariusz-szmerdt.jpg',
    },
    {
      id: 8,
      artistName: 'Vincent Van Gogh',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'The Starry Night',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/3-the-starry-night-vincent-van-gogh.jpg',
    },
    {
      id: 9,
      artistName: 'Beverly Brown',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'New York Winter 57th Street',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/new-york-winter-57th-street-beverly-brown-prints.jpg',
    },
    {
      id: 10,
      artistName: 'Toni Thorne',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'The Beach',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/1-the-beach-toni-thorne.jpg',
    },
    {
      id: 11,
      artistName: 'Scott Listfield',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'One Golden Arch',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/one-golden-arch-scott-listfield.jpg',
    },
    {
      id: 12,
      artistName: 'John James Audubon',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Louisiana Heron',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/louisiana-heron-john-james-audubon.jpg',
    },
    {
      id: 13,
      artistName: 'Scott Listfield',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Nasdaq',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/nasdaq-scott-listfield.jpg',
    },
    {
      id: 14,
      artistName: 'Edward Robert Hughes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Midsummer Eve',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/midsummer-eve-edward-robert-hughes.jpg',
    },
    {
      id: 15,
      artistName: 'Soosh',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Bed. King size.',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/bed-king-size-soosh.jpg',
    },
    {
      id: 16,
      artistName: 'Soosh',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'My Whale',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/my-whale-soosh.jpg',
    },
    {
      id: 17,
      artistName: 'Toni Thorne',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'To Top It Off',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/to-top-it-off-toni-thorne.jpg',
    },
    {
      id: 18,
      artistName: 'Toni Thorne',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Sword of the Spirit',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/sword-of-the-spirit-toni-thorne.jpg',
    },
    {
      id: 19,
      artistName: 'Soosh',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Christmas Tree',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/christmas-tree-soosh.jpg',
    },
    {
      id: 20,
      artistName: 'Beverly Brown',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Pink Cherry Blossoms',
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/watercolor-painting-of-pink-cherry-blossoms-beverly-brown-prints.jpg',
    },
  ];

  constructor(private configService: ConfigService) {}

  public async findAll(search: string): Promise<Art[]> {
    if (!search) return this.arts;
    const searchKeys = this.configService.get<string[]>('searchKeys');

    return this.arts.filter((art) =>
      searchKeys.some((key) =>
        art[key as ArtSearchKeys].toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  public async findOne(artId: number): Promise<Art> {
    return this.arts.find(({ id }) => id === artId);
  }
}
