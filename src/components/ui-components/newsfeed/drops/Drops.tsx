"use client"
import { useTheme } from "@mui/material"
import Dropcard from "./Dropcard"

const Drops = () => {
    const theme = useTheme()
    const drops = [
        {
            user: {
                fullname: "Samara Islam",
                username: "samaraislamm",
                isVerified: true,
                profilePicture: `https://instagram.fdac90-1.fna.fbcdn.net/v/t51.82787-15/710059319_18088846310613255_8333087806026863504_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ig_cache_key=MzkwODUxMzMxNTU0MTY4ODk2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTMyMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=KKkTs4j56hkQ7kNvwGh9zhj&_nc_oc=AdqoiVkzB7yGVQ-NOwCOlotZvnLpRW31ypOJTbokC739av47UAg0ITeEsm-qjEaSW_o&_nc_zt=23&_nc_ht=instagram.fdac90-1.fna&_nc_gid=-UGwvDR3KzfQx4493sGKsw&_nc_ss=7baaf&oh=00_AQPssh_Zrd5XwTUHm5jbKqLNl_6eN3fB06YLHltLT2nhvA&oe=6AD48B8F`,
            },
            content: {
                caption: "Stepping into adultry",
                picture: `https://instagram.fdac90-1.fna.fbcdn.net/v/t51.82787-15/555579603_18059860520613255_4671044794361754928_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ig_cache_key=MzczMDE4MjI0ODgzOTc2NDY5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTMyMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=DoFX0p-bpxUQ7kNvwHeeNdB&_nc_oc=Adq8aS7lqNzb084QHZA2qQe3uuLIRoPlGwNLu1uEWfm_PRp1L3vMa-wToGZLg13JF80&_nc_zt=23&_nc_ht=instagram.fdac90-1.fna&_nc_gid=-UGwvDR3KzfQx4493sGKsw&_nc_ss=7baaf&oh=00_AQP1gYexSEdg8-0GkMYr-WS_HcZZLnIfOFuiiyB6KIXPkA&oe=6AD48112`,
                date: "12m",
                hashtag: "Celebration",
                mood: "BIRTHDAY"
            }
        },
        {
            user: {
                fullname: "Jubayer Hossain",
                username: "jubayerhossain01",
                isVerified: false,
                profilePicture: `https://instagram.fdac90-1.fna.fbcdn.net/v/t51.82787-19/763080504_18111116722962652_263479234049739946_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=xwU_wncB-6QQ7kNvwGqcXd2&_nc_oc=Adpu9jU4geUtkzW_ZExy3pdHvXgEJG0wv3lvQmLCf9jxRF-hXUyltmJPH3K6qGOf3yA&_nc_zt=24&_nc_ht=instagram.fdac90-1.fna&_nc_gid=73pgdksl5W_dtMoaJECdpQ&_nc_ss=7baaf&oh=00_AQMYjQTGFnaezFjtA6KmSGI9PP35w3sUi5DcGJHUz11M2A&oe=6AD47A34`,
            },
            content: {
                caption: "W my boss",
                picture: `https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/481989869_1839156560235962_3318653985873250385_n.jpg?stp=dst-jpg_tt6&cstp=mx960x1280&ctp=s960x1280&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGqyKeojZSqiI6Lr845lnT6OmiBpby9NJ86aIGlvL00n5WkFYHzm3BmUe53RpPOwoaJbKbzIzwNWKcRZJZYDhgb&_nc_ohc=7Yz41M_TzzMQ7kNvwFoz7aH&_nc_oc=Adrx3bGvWZz8pBqcyTMymfp6tz8vWgPARmEReJgplTB7njqAeoZR1HnhZ0oNEK1tlo8&_nc_zt=23&_nc_ht=scontent.fdac90-1.fna&_nc_gid=qhiTTVm9OW10AfvBTVBY4A&_nc_ss=7b2a8&oh=00_AQPbHHKzEw9BJ_23YTkm59JO__WAU6iDiVp6tn0xMGsCxg&oe=6AD4694F`,
                date: "31m",
                hashtag: "Friends",
                mood: "BROTHERHOOD"
            }
        },
        {
            user: {
                fullname: "Safwan Ibn Monir",
                username: "safwaanibnmonir",
                isVerified: true,
                profilePicture: `https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-1/724560316_122181317846915016_7107317494305966676_n.jpg?stp=dst-jpg_tt6&cstp=mx960x970&ctp=s200x200&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZbdNOXZ-n0q0aJKOmKTlYy20fwvLhdxrLbR_C8uF3Gg5OKMN9PUrJr2dp2mhhrTPOvEKc9D5454CCydifI8Me&_nc_ohc=xa-gXIJVTqUQ7kNvwGR7vk0&_nc_oc=AdoQBSS4Oz8tT39G7_TkPLKW_Kcjf8qF45P2HMfewZ7jo-oMKvP-t3PSx1SRoap_VWo&_nc_zt=24&_nc_ht=scontent.fdac90-1.fna&_nc_gid=DXf34pRDp3ckrkSTfk4fTg&_nc_ss=7b2a8&oh=00_AQPhXZIN_HMxWXcjcjmHbClMdggDW22vokFkpMf8_oC_0w&oe=6AD46F83`,
            },
            content: {
                caption: "The Last Hour",
                picture: `https://scontent.fdac90-1.fna.fbcdn.net/v/t51.82787-15/746503052_17895255375556597_2013260473204420376_n.jpg?stp=dst-jpegr_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0VaSNkZ3BsOi5KSq9T3BNMr3kD43gxlYyveQPjeDGVoWGNcXZVcL7XYei4GwT5aD-EzPnSezCRQLidIBXLT-w&_nc_ohc=G50b8nlAEIQQ7kNvwFQFHi2&_nc_oc=AdopKX2SWXtAKTNrtJ-6dlGiqzjhXKGD3Shx1Y974FaDpzx1rt6jcWCJTh-aUMJFQA0&_nc_zt=23&se=-1&_nc_ht=scontent.fdac90-1.fna&_nc_gid=vyYhthUcQCtxIaaqamft7A&_nc_ss=7b2a8&oh=00_AQOZoY5Lhy1cgxSRvmQKxZOF7vYTzCnh16DBfsuEEWGRfA&oe=6AD474A7`,
                date: "57m",
                hashtag: "Hanging Out",
                mood: "SOLITUDE"
            }
        },
        {
            user: {
                fullname: "Samara Islam",
                username: "samaraislamm",
                isVerified: true,
                profilePicture: `https://instagram.fdac90-1.fna.fbcdn.net/v/t51.82787-15/710059319_18088846310613255_8333087806026863504_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ig_cache_key=MzkwODUxMzMxNTU0MTY4ODk2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTMyMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=KKkTs4j56hkQ7kNvwGh9zhj&_nc_oc=AdqoiVkzB7yGVQ-NOwCOlotZvnLpRW31ypOJTbokC739av47UAg0ITeEsm-qjEaSW_o&_nc_zt=23&_nc_ht=instagram.fdac90-1.fna&_nc_gid=-UGwvDR3KzfQx4493sGKsw&_nc_ss=7baaf&oh=00_AQPssh_Zrd5XwTUHm5jbKqLNl_6eN3fB06YLHltLT2nhvA&oe=6AD48B8F`,
            },
            content: {
                caption: "Traditional Vibesss",
                picture: `https://instagram.fdac90-1.fna.fbcdn.net/v/t51.82787-15/654271953_18080031299613255_3837284927511880422_n.jpg?stp=dst-jpg_e35_p720x720_tt6&_nc_cat=109&_nc_map=urlgen_bucketless&ig_cache_key=Mzg1Nzk4OTUxMDUzNDI2MDAxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTMyMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=91pCitIgWr4Q7kNvwHya8ep&_nc_oc=AdreTeCg70vyyJGcqaAF9C4enuiKFXGKbDbZ09TYrZYsWXlmRgDJiLw4S7ZC79SGImk&_nc_zt=23&_nc_ht=instagram.fdac90-1.fna&_nc_gid=nWfKFW8hLevgKgoHTn7m8Q&_nc_ss=7baaf&oh=00_AQMNJ29gAJlmMFnKGYrULvB52WVSuor37ePAXz2NaDKMbw&oe=6AD45F23`,
                date: "2h",
                hashtag: "Traditional Attire",
                mood: "GOOD TIME"
            }
        },
        {
            user: {
                fullname: "Zawad Bin Muhammad",
                username: "zawaadsaminn",
                isVerified: false,
                profilePicture: `https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-1/814800865_1541473951112600_3266355640714121656_n.jpg?stp=dst-jpg_tt6&cstp=mx960x957&ctp=s200x200&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEkOGJL8YodV2ifWhOI0Ghm68mVWRGByaXryZVZEYHJpTWVxy_2QFX0LJLa2EMs_sO1GgiAZXZAlLZh9etU05YE&_nc_ohc=eVn1Y2LPkW0Q7kNvwFi_W9o&_nc_oc=AdprV11Sjw1GbxsUbkQED_St1FhzOe5bw9tXC4LB13d5T2mhjlKd3mGz1eKKQ75IRFE&_nc_zt=24&_nc_ht=scontent.fdac90-1.fna&_nc_gid=Br-tG_By8n3si-7bssg3Jw&_nc_ss=7b2a8&oh=00_AQNgsNo9t80amvk5KfnYfvwKOZUI0oKY6a7PJ0AukIVmKA&oe=6AD4947A`,
            },
            content: {
                caption: "She gifted this shirt",
                picture: `https://instagram.fdac90-1.fna.fbcdn.net/v/t51.82787-15/704731606_18111330743504569_6173030357019122982_n.jpg?stp=dst-jpg_e35_p720x720_tt6&_nc_cat=102&_nc_map=urlgen_bucketless&ig_cache_key=MzkwMjU3MDI5MjkzMDc1NDMwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzAyNC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=O8ntEExRxxsQ7kNvwFH0cBW&_nc_oc=AdpC92No4rgz73RKLWddKaOkFOQlKPLt90HPZ_jNmZrR1rUwywgMkxa1FIzfG34uHtA&_nc_zt=23&_nc_ht=instagram.fdac90-1.fna&_nc_gid=3K_mShNlFKuvGP2q6n0X0g&_nc_ss=7baaf&oh=00_AQNl_ZSsw5BKt15f-h-E3WkCkHqYvVH-0Ijh00KpHtNdww&oe=6AD48C56`,
                date: "6h",
                hashtag: "Streetwear",
                mood: "LOWKEY FLEX"
            }
        },
    ]

    return (
        <div
            className="flex flex-col w-full"
        >
            {
                drops && drops.length > 0 ? (
                    <div className="flex flex-col gap-6">
                        {
                            drops.map((drop) => (
                                <Dropcard
                                    fullname={drop.user.fullname}
                                    username={drop.user.username}
                                    profilePicture={drop.user.profilePicture}
                                    isVerified={drop.user.isVerified}
                                    caption={drop.content.caption}
                                    picture={drop.content.picture}
                                    date={drop.content.date}
                                    hashtag={drop.content.hashtag}
                                    mood={drop.content.mood}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div>
                        <h1 className={`text-[22px] font-semibold text-[${theme.palette.text.secondary}] text-center`}
                        >
                            No drops to show
                        </h1>
                    </div>
                )
            }

        </div>
    )
}

export default Drops
