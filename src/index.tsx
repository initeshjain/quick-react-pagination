import React from "react";

const styles = {
  icon: {
    height: '1.5em',
    width: '1.5em'
  },
  main_div: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    margin: '2rem 0'
  },
  pagination_container: {
    border: '0.5px solid black',
    display: 'flex',
    flexDirection: 'row' as 'row',
    borderRadius: '5px',
    borderStyle: 'ridge'
  },
  btn: {
    padding: '0.5rem',
    width: '3em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer'
  },
  btnHover: {
    backgroundColor: 'lightblue',
    color: 'black'
  },
  active: {
    padding: '0.5rem',
    width: '3em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white'
  }
};

const Icons = {
  DoubleLeftArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={styles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
      />
    </svg>
  ),

  DoubleRightArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={styles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
      />
    </svg>
  ),

  SingleLeftArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={styles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  ),

  SingleRightArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={styles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  ),
};

type PropTypes = { page: number, handlePageChange: (page: number) => void, totalPages: number }

const Pagination: React.FC<PropTypes> = ({ page = 1, handlePageChange, totalPages }) => {

  return (
    <div style={styles.main_div}>
      <div style={styles.pagination_container}>
        <button
          disabled={page <= 1}
          onClick={() => handlePageChange(1)}
          style={styles.btn}
        >
          {Icons.DoubleLeftArrow}
        </button>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          style={styles.btn}
        >
          {Icons.SingleLeftArrow}
        </button>

        {page === 1 && (
          <>
            <button style={styles.active}>1</button>
            {totalPages >= 2 && (
              <button
                onClick={() => handlePageChange(2)}
                style={styles.btn}
              >
                2
              </button>
            )}
            {totalPages >= 3 && (
              <button
                onClick={() => handlePageChange(3)}
                style={styles.btn}
              >
                3
              </button>
            )}
          </>
        )}

        {page > 1 && page < totalPages && (
          <>
            <button
              onClick={() => handlePageChange(page - 1)}
              style={styles.btn}
            >
              {page - 1}
            </button>
            <button style={styles.active}>{page}</button>
            <button
              onClick={() => handlePageChange(page + 1)}
              style={styles.btn}
            >
              {page + 1}
            </button>
          </>
        )}

        {page >= totalPages && page !== 1 && (
          <>
            <button
              onClick={() => handlePageChange(page - 2)}
              style={styles.btn}
            >
              {page - 2}
            </button>
            <button
              onClick={() => handlePageChange(page - 1)}
              style={styles.btn}
            >
              {page - 1}
            </button>
            <button style={styles.active}>{page}</button>
          </>
        )}

        <button
          disabled={page >= totalPages}
          onClick={() => handlePageChange(page + 1)}
          style={styles.btn}
        >
          {Icons.SingleRightArrow}
        </button>
        <button
          disabled={page >= totalPages}
          onClick={() => handlePageChange(totalPages)}
          style={styles.btn}
        >
          {Icons.DoubleRightArrow}
        </button>
      </div>
    </div>
  );

}

export default Pagination;