import * as React from "react"
import styled from "styled-components"
import ReactPaginate from "react-paginate"
import { Swiper, SwiperSlide } from "swiper/react"

import ContentBox from "../common/ContentBox"

const BottomTitle = styled.h3`
  font-family: CeraGR-Bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  text-align: left;
`
const BottomDesc = styled.a`
  font-family: CeraGR-Medium;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: right;
`

const BottomHeader = styled.div`
  margin-top: 88px;
  margin-bottom: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #002f6c;
`
const MobilePanel2 = styled.div`
  margin: 30px 30px;
  & h5 {
    margin-top: 40px;
    margin-bottom: 24px;
    //styleName: H5/ Bold;
    font-family: CeraGR-Bold;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: left;
  }
  & .bref {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid #f2f2f2; */
    padding: 16px;
    margin-top: 16px;
  }
`

const CategoryActivitiesPanel = ({ resourceData, categoryData }) => {
  const [activites, setActivites] = React.useState([])
  const PER_PAGE = 3
  const handlePageClick = event => {
    const itemOffset = (event.selected * PER_PAGE) % activites.length

    setPageInfo({
      ...pageInfo,
      itemOffset,
    })
  }
  React.useEffect(() => {
    let newActivities = resourceData.splice(0, 12)
    let totalCount = newActivities.length
    let itemOffset = 0
    let pageCount = Math.ceil(totalCount / PER_PAGE)
    setActivites(newActivities)
    setPageInfo({
      totalCount,
      itemOffset,
      pageCount,
    })
  }, [resourceData])
  const [pageInfo, setPageInfo] = React.useState({
    totalCount: 0,
    itemOffset: 0,
    pageCount: 0,
  })
  return (
    <>
      <MobilePanel2 className="mobile-activities">
        <h5>Έργο που ξεχωρίζει</h5>
        <div className=" container overflow-auto">
          <div className="d-flex w-auto">
            <Swiper slidesPerView={1.4}>
              {activites.slice(0, 5).map((item, idx) => (
                <SwiperSlide key={idx}>
                  <ContentBox
                    key={idx}
                    resourceData={item}
                    categoryData={categoryData}
                    category={item.category}
                    dashboard={true}
                    width="300px"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <a className="bref" href="#hre">
          <span>Διαβάστε περισσότερα </span> <span>&#10095;</span>
        </a>
      </MobilePanel2>
      <div className="desktop-activities container">
        <BottomHeader className="">
          <BottomTitle>Έργο που ξεχωρίζει</BottomTitle>
          <BottomDesc href="/resources" style={{ textDecoration: "underline" }}>
            Διαβάστε περισσότερα &#10095;
          </BottomDesc>
        </BottomHeader>
        <div>
          <div className="row mt-5">
            {activites
              .slice(pageInfo.itemOffset, pageInfo.itemOffset + PER_PAGE)
              .map((item, idx) => (
                <div
                  className="col-sm-6 col-lg-4 d-flex justify-content-center"
                  key={idx}
                >
                  <ContentBox
                    resourceData={item}
                    categoryData={categoryData}
                    dashboard={true}
                    width="300px"
                  />
                </div>
              ))}
          </div>
          <div
            className="row"
            style={{ marginTop: "92px", marginBottom: "92px" }}
          >
            <ReactPaginate
              breakLabel="..."
              onPageChange={e => handlePageClick(e)}
              pageRangeDisplayed={3}
              pageCount={pageInfo.pageCount}
              renderOnZeroPageCount={null}
              previousLabel={null}
              nextLabel={null}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination-link"}
              nextLinkClassName={"pagination-link"}
              disabledClassName={"pagination-link__disabled"}
              activeClassName={"pagination-link__active"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryActivitiesPanel
