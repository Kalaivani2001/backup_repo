import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useSelector } from "react-redux"

export const SEOMetaTag = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const claimdetailResult = useSelector(state => state.detail.result)
  console.log("seoData", claimdetailResult)
  const seo = {
    title: title,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }
  // 
  return (
    <>
      <title>GoKeywe - Homes for Sale, Apartments and Houses for Rent</title>
      <meta name="title" content="GoKeywe - Homes for Sale, Apartments and Houses for Rent" />
      <meta name="description" content="Gokeywe is an online home search platform with real-time MLS data. Find your next home with an intuitive map-based search function for consumers and free leads for real estate agents" />
      <meta name="url" content="https://www.gokeywe.com" />
      <meta name="image" content="https://gokeywe.com/pro/assets/img/home/home-section2.png" />

    </>
  )
}
