import{gql} from "@apollo/client"

export const ME=gql`
query Me {
    me {
      _id
      email
      password
      savedBooks {
        authors
        bookId
        image
        description
        link
        title
      }
      username
    }
  }
`