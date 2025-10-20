import React from 'react';

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`search-popup-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`search_popup ${isOpen ? 'active' : ''}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="tj_search_wrapper">
                <div className="search_form">
                  <form action="/">
                    <div className="search_input">
                      <div className="search-box">
                        <input 
                          className="search-form-input" 
                          type="text" 
                          placeholder="Type Words and Hit Enter" 
                          required 
                        />
                        <button type="submit">
                          <i className="tji-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
