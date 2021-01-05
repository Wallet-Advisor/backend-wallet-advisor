const userModel = require("../../models/userModel");
const requestHandler = require("../../utils/requestHandler");
const cloudinary = require("../../middlewares/cloudinaryHandler");

async function handleGetUserList(req, res) {
  try {
    const users = await userModel.getUsers();
    return requestHandler.success(res, 200, "Users fetched successfully", {
      users,
    });
  } catch (error) {
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }
}
async function handleGetSingleUser(req, res) {
  const { id } = req.params;
  const { email } = req.body;
  let searchQuery;
  if (id) {
    searchQuery = { id };
  }
  if (email) {
    searchQuery = { email };
  }
  try {
    const user = await userModel.getSingleUser(searchQuery);
    if (user) {
      return requestHandler.success(res, 200, "User fetched successfully", {
        user,
      });
    }
    // return requestHandler.error(
    //   res,
    //   400,
    //   `User with ${searchQuery} does not exist`
    // );
  } catch (error) {
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }
}

const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.decodedToken;
    const foundUser = await userModel.getSingleUser({ id: userId });

    if (foundUser) {
      if (req.file) {
        const currentImage = await JSON.parse(foundUser.profile_image_url);
        req.body.profile_image_url = [
          { avatar: req.file.secure_url, public_id: req.file.public_id },
        ];
        cloudinary.deleteCloudImage(currentImage);
      } else {
        req.body.profile_image_url = "";
      }
      const updates = {
        email: req.body.email || foundUser.email,
        // username: req.body.username || foundUser.username,
        fullname: req.body.fullname || foundUser.fullname,
        profile_image_url:
          req.body.profile_image_url || foundUser.profile_image_url,
        middle_name: req.body.middle_name || foundUser.middle_name,
        last_name: req.body.last_name || foundUser.last_name,
        address: req.body.address || foundUser.address,
        phone_number: req.body.phone_number || foundUser.phone_number,
        bank_name: req.body.bank_name || foundUser.bank_name,
        account_number: req.body.account_number || foundUser.account_number,
        bvn: req.body.bvn || foundUser.bvn,
        id_type: req.body.id_type || foundUser.id_type,
        id_number: req.body.id_number || foundUser.id_number,
        mothers_maiden: req.body.mothers_maiden || foundUser.mothers_maiden,
        dob: req.body.dob || foundUser.dob,
        occupation: req.body.occupation || foundUser.occupation,
        company_name: req.body.company_name || foundUser.company_name,
        company_address: req.body.company_address || foundUser.company_address,
        nationality: req.body.nationality || foundUser.nationality,
        next_of_kin: req.body.next_of_kin || foundUser.next_of_kin,
        address_of_next_of_kin:
          req.body.address_of_next_of_kin || foundUser.address_of_next_of_kin,
        phone_number_of_next_of_kin:
          req.body.phone_number_of_next_of_kin ||
          foundUser.phone_number_of_next_of_kin,
        relationship: req.body.relationship || foundUser.relationship,
      };
      const userUpdates = await userModel.updateUser(updates, userId);
      return requestHandler.success(res, 200, "Profile updated successfully", {
        userUpdates,
      });
    }
    return requestHandler.error(res, 400, `You are not authorized to do this`);
  } catch (error) {
    return requestHandler.error(res, 500, `server error ${error.message}`);
  }
};

module.exports = {
  handleGetUserList,
  handleGetSingleUser,
  updateUserProfile,
};
