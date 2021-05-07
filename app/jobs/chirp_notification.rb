class ChirpNotification < ApplicationJob
  PUSH_URL = 'https://bellbird.joinhandshake-internal.com/push'.freeze

  def perform(chirp_id)
    response = RestClient.post(PUSH_URL, { chirp_id: chirp_id }.to_json, content_type: :json, accept: :json)
    response.code
  end
end

# RestClient.post('https://bellbird.joinhandshake-internal.com/', { chirp_id: 1 }.to_json, content_type: :json, accept: :json)
