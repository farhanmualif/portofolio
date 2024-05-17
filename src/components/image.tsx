import ProfileImage from "../assets/profile.png";

export default function MyProfile() {
  return (
    <div className="max-h-36 max-w-36">
      <img src={ProfileImage} className="rounded-full" />
    </div>
  );
}
