export const tourItemCollectionQuery = `
  {
    tourItemCollection {
      items {
        date
        place 
        city 
        soldOut
        country
        ticketLink
        videoLink
        sys {
          id
        }
      }
    }
  }
`;

export const trackCollectionQuery = `
  {
    trackCollection {
      items {
       sys {
        id
       }
       date
       title
       description
       cover {
        url
       }
      }
    }
  }
`;

export const newsItemCollectionQuery = `
  {
    newsItemCollection {
      items {
       sys {
        id
       }
       title
       date
       cover {
        url
       }
      }
    }
  }
`;