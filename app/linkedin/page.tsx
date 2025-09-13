// components/LinkedInBadge.tsx
"use client"

export default function LinkedInBadge() {
  return (
    <div className="mt-10 flex justify-center">
      <iframe
        title="LinkedIn Profile Badge"
        src="https://badges.linkedin.com/profile?locale=en_US&badgetype=HORIZONTAL&badgetheme=light&uid=1&version=v1&maxsize=large&trk=profile-badge&vanityname=nirav-rohra"
        style={{ width: 540, height: 200, border: 0, overflow: "hidden" }}
        loading="lazy"
      />
    </div>
  )
}
